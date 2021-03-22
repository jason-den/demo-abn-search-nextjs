# ABN SearchByRegistrationEvent with Next.js

## Why this demo:
It's an experiemnt on marketing lead finding. We try to find out newly registered business and their contact detail. But it turns out a too loog shot from ABN to email address.

## What it can do

It can be used to get newly registered ABN. 
The result can also be used to do batch ABN look up, finding out a bit more details of them. 
For example:
```xml
<entityType>
  <entityTypeCode>PRV</entityTypeCode>
  <entityDescription>Australian Private Company</entityDescription>
</entityType>
<mainName>
  <organisationName>A Demo Company Name PTY LTD</organisationName>
  <effectiveFrom>2021-03-16</effectiveFrom>
</mainName>
<mainBusinessPhysicalAddress>
  <stateCode>NSW</stateCode>
  <postcode>2000</postcode>
  <effectiveFrom>2021-03-16</effectiveFrom>
  <effectiveTo>0001-01-01</effectiveTo>
</mainBusinessPhysicalAddress>
```

### How to run:

```shell
git clone [the link of this repo]
cd [file path]
npm i
npm run dev
```

You shall see something like this

```
> abn-new-registers@0.1.0 dev
> next dev -p 3001

ready - started server on 0.0.0.0:3001, url: http://localhost:3001
info  - Loaded env from /Users/jasonden/Home/Work-SS/abn-new-registers/.env
event - compiled successfully
......
```



Open `http://localhost:3001` and the window should show something like this:



![image-20210322150049711](https://raw.githubusercontent.com/jason-den/picture-storage/master/2021-03/demo.png)



