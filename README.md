## Installation

To install this library, run:

```bash
$ npm install @standuply/ng2-emoji --save
```

## Usage

`VERY IMPORTANT`
In one of your css/scss files. include these styles:

```css
.emoji{
    display:inline-block;
}
```

In your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { Ng2EmojiModule } from 'ng2-emoji';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Include the awesome
    Ng2EmojiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In your `index.html`:
```xml
<link href="./node_modules/ng2-emoji/css/ng2-emoji.css" rel="stylesheet">
```

OR if using angular-cli.json, use:
```json
 "apps": [
    {
      ...
      "styles": [
        "styles.css",
        "../node_modules/ng2-emoji/css/ng2-emoji.css"
      ],
      ...
  ]
```

In your component where you want to use `ng2-emoji`, just use:
```xml
 <div class="message-container" [innerHTML]="myMessageString | emojis">
 </div>
```
where the model `myMessageString` inside your `@Component` will be:

```typescript
...
export class MyComponent {
    public messageString: String = "";
    constructor() {
        this.myMessageString = 'Hello, how are you? :smile: It was fun at the bowling game the other day :joy:';
    }
}
```
