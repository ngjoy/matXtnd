import { coerceArray, coerceBooleanProperty } from '@angular/cdk/coercion';
import { COMMA, TAB } from '@angular/cdk/keycodes';
import { Component, Input, HostBinding, ViewChild, ElementRef, Optional, Self, DoCheck } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export type MatXtndChipOptionType = { label: string, value: any}

@Component({
  selector: 'matxtnd-chips',
  templateUrl: 'chips.component.html',
  styleUrls: [`chips.component.scss`],
  providers: [
    { provide: MatFormFieldControl, useExisting: MatXtndChipsComponent}
  ],
})
export class MatXtndChipsComponent implements ControlValueAccessor, DoCheck, MatFormFieldControl<MatXtndChipOptionType[]> {

  private touched = false;
  private chipOptions: Array<MatXtndChipOptionType> = [];
  private _filter(value: string | MatXtndChipOptionType ): MatXtndChipOptionType[] {
    const filterValue = (typeof value === 'string' || value instanceof String) ? value.toLowerCase() : value.label.toLowerCase();
    return this.options.filter(option => option.label.toLowerCase().includes(filterValue));
  }
  private matchOnlyOptions = false;

  static nextId = 0;
  @HostBinding() id = `matxtnd-chips-${MatXtndChipsComponent.nextId++}`;
  @ViewChild('elementInput') elementInput: ElementRef | null = null;
  @ViewChild('auto') matAutocomplete: MatAutocomplete | null = null;

  value: MatXtndChipOptionType[]  = [];
  stateChanges = new Subject<void>();
  focused: boolean = false;
  required: boolean = false;
  disabled: boolean = false;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  addOnBlur = false;
  removable = true;
  selectable = true;
  userAriaDescribedBy?: string | undefined;
  inputCtrl = new FormControl();
  filteredOptions$ = this.inputCtrl.valueChanges.pipe(
     startWith(null),
     map((item: string | null) => (item ? this._filter(item) : this.options.slice())),
   );

  @Input() separatorKeysCodes: number[] = [COMMA, TAB];
  propagateChange = (_: any) => ({});
  propagateTouched = () => ({});


  @HostBinding('class.floating')
  get shouldLabelFloat() : boolean {
    return this.focused || !this.empty;
  }

  @Input() placeholder: string = 'Add elements..';
  @Input() min: number = 3;
  @Input() set optionsOnlyValues(value: any) {
    this.matchOnlyOptions = coerceBooleanProperty(value);
  }
  get optionsOnlyValues(): any { return this.matchOnlyOptions }
  @Input() set options(value: Array<MatXtndChipOptionType> | MatXtndChipOptionType | null) {
    if (value) {
      this.chipOptions = coerceArray(value);
    }
  }
  get options(): Array<MatXtndChipOptionType> { return this.chipOptions }

  constructor(@Optional() @Self() public readonly ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngDoCheck(): void {
    if ((this.ngControl as any)?._parent.submitted) {
      this.propagateTouched()
      this.touched = true;
      this.stateChanges.next();
    }
  }

  setDescribedByIds(ids: string[]): void { }

  get errorState(): boolean {
    return this.touched && (!!this.ngControl?.control?.errors ?? false);
  }

  get empty() {
    return (this.value?.length ?? 0) == 0 && (!!!this.inputCtrl.value);
  }

  get valueLabels(): string[] {
    return this.value?.map(v => v.label) ?? [];
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() == 'input') {
      this.componentInputEelement.nativeElement.focus();
      this.focused = true;
    }
  }

  writeValue(values: MatXtndChipOptionType[]): void {
    if (values?.length) {
      this.value = values;
      this.stateChanges.next();
      return;
    }
    this.value = [];
    this.stateChanges.next();
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = true;
    this.removable = !isDisabled;
  }

  get componentInputEelement() {
    return this.elementInput as ElementRef;
  }

  onBlur() {
    this.focused = false;
    this.markControlAsTouched();
  }

  getOptionLabel(option: MatXtndChipOptionType) {
    return option?.label;
  }

  remove(label: string) {
    this.value = this.value.filter(v => v.label != label);
    this.propagateChange(this.value);
  }

  add(event: MatChipInputEvent) {
    if (!(this.matAutocomplete as MatAutocomplete).isOpen) {
      const value = event.value;
      this.pickLabel(value);
    }
  }

  selected(event: MatAutocompleteSelectedEvent) {
    const selectedEventValue: MatXtndChipOptionType = event.option.value;
    const { label } = selectedEventValue;
    this.pickLabel(label);
  }

  clearInput() {
    this.inputCtrl.setValue(null);
    this.componentInputEelement.nativeElement.value = '';
  }
  

  pickLabel(label: string) {
    this.clearInput();

    if (this.value.some(v => v.label == label)) {
      return;
    }

    if (this.options?.length) {
      const item = this.options.find(o => o.label == label);
      if (item) {
        this.value = [...this.value, item];
        this.propagateChange(this.value);
        return;
      }
    }

    if (this.matchOnlyOptions == false) {
      if (!!label) {
        this.value = [...this.value, { label, value: label }];
        this.propagateChange(this.value);
      }
    }
  }

  markControlAsTouched() {
    this.touched = true;
    this.propagateTouched();
    if (this.ngControl?.control) {
      this.ngControl.control.markAsTouched();
    }
  }


} 
