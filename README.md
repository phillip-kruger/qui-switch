# qui-switch

The switch UI component

## Installation

```bash
npm i @qomponent/qui-switch
```

## Usage

```javascript
import '@qomponent/qui-switch';
```

### Size

 - tiny
 - small
 - normal
 - large
 - ??px

Size can be provided with the `size` attribute.

```html
<body>
    <h1>Switch</h1>
    <qui-switch id="switch"></qui-switch>
    <br/>
    <qui-switch id="switch2" label="With label" ></qui-switch>
    <br/>
    <qui-switch id="switch3" size="tiny" label="tiny" ></qui-switch>
    <br/>
    <qui-switch id="switch4" size="small" label="small" ></qui-switch>
    <br/>
    <qui-switch id="switch5" size="normal" label="normal" ></qui-switch>
    <br/>
    <qui-switch id="switch6" size="large" label="large" ></qui-switch>
    <br/>
    <qui-switch id="switch7" size="100px200px" label="custom" ></qui-switch>
  </body>

  <script>
    document.getElementById("switch").addEventListener("valueChanged", displayValue);

    function displayValue(e){
      console.log("-----> checked: " + e.detail.checked);
    }

  </script>
```

## Example

To run the example:

```bash
npm install
npm start
```

Then go to [http://localhost:8080/example](http://localhost:8080/example)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)