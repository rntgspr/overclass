# overclass

Manipulate class names based on css modules or simple classes using tagged template strings

Use:
**mySCSSFile.scss**
```scss
.tracer {
    color: blue;
}

.bastion {
    content: 'robot';
}
.bastion--turret {
    background0-color: orange;
}
```

**myJavascriptFile.js**
```javascript
import oc from 'overclass';

import styles from './mySCSSFile.scss';

<div className={oc(styles)`tracer tracer--nano`} />
<div className={oc(styles)`bastion ${turret && 'bastion--turret'}`} />
```
