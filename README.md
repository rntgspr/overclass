# overclass

Manipulate classNames based on css/scss modules using tagged template strings or simple build directly classNames attribute easily

Use:
**mySCSSFile.scss**
```scss
.tracer {
    color: blue;
}
.tracer__nano {
    color: silver;
}

.bastion {
    content: 'robot';
}
.bastion__turret {
    background-color: orange;
}

.hanzo {
    content: '-> -> ->';

    &__arrow-hold {
        content: '------ --- -- ->';
    }
}

.genji {
    color: green;

    &__ultimate {
        display: none;
    }
}
```

**myJavascriptFile.js**
```javascript
import oc, { cn, jn } from 'overclass';

import styles from './mySCSSFile.scss';

<div className={oc(styles)`tracer tracer__nano`} />
<div className={oc(styles)`bastion ${turret && 'bastion__turret'}`} />

const s76 = oc(styles);
<div className={s76`hanzo ${hasTank && 'hanzo__arrow-hold'}`} />
<div className={s76`genji ${hasTank && 'genji__ultimate'}`} />

/* for classnames */
<div className={cn`bastion ${turret && 'bastion__turret'}`} />

/* for joined */
<div className={jn('bastion', turret && 'bastion__turret')} />

```
