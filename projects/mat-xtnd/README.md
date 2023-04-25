> An angular material (@angular/material) Library

<div align="center">
<h1>MatXtnd</h1>

<p>Extending Angular Material Components for fast development</p>
</div>

## Introduction

A user experiences adopted for common use among projects, This library assumes the use of (@angular/material) as a library, and it extends
material design principle into a few more ideas for fast development.

## Installation

```bash
npm install @ngjoy/mat-xtnd --save
```

## Introduce
<p>Introduce into angular projects.</p>

```typescript
import { MatXtndModule } from '@ngjoy/mat-xtnd';
....

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialComponentsModule,
    MatXtndModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
