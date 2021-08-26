# GTU Results App Reverse Engineered!

> **DISCLAIMER: THIS REPO IS FOR EDUCATION PURPOSE ONLY. PLEASE DO NOT MISUSE IT.**

### What is this?
It is a implementation of the chain requests made by GTUResults [android application](https://play.google.com/store/apps/details?id=com.gtu.result.gturesult). Which can be easily traced with WireShark or any http trcaker. This is the wrapper library to request on GTU's private api servers and get your result information. This is **not any kind of hacking or data stealing**. 

## Installation

- You can install from [npm registery](https://www.npmjs.com/package/gtu-api).

```sh
npm install gtu-api
```

## How to use

The main (entry) file contains GTUResults class you can require/import file and use it.

- Here is an Example code.
```js
const GTU = require('./gtu')

async function main() {
    //to get available sessions
    const sessions = await GTU.getSessions()
    console.log(sessions)

    // select summer 2020
    const summer2020 = sessions.find(v => v.ExSession == 'S2020')

    // get branches associated with summer 2020
    const branches = await GTU.getCourse(summer2020.ExSession)
    console.log(branches)

    // select BE
    const BE = branches.find(v => v.branchShort == 'BE')

    // get exams for BE in summer 2020
    const exams = await GTU.getExam(summer2020.ExSession, BE.branchShort)
    console.log(exams)
    
    // select exam number 2466 which is for BE 4th sem remedial summer 2020
    const examId = exams.find(v => v.examid == '2466')

    // fetch result with enrollment number and examId
    const result = await GTU.fromEnrollment('<your enrollment>', examId.examid)
    console.log(result)
}

main()
```

#### Implementation
- [here](https://gturesults.net) is an implementation of the given module.

##### IMPORTANT NOTE
> ON gturesults.in THEY HAVEN'T MENTIONED ANY TERMS AND CONDITIONS FOR API. I AM ALSO USING THEIR PRIVATE API JUST TO DISPLAY DATA. I'M NOT STEALING ANY INFO OR SELLING ANY KIND OF DATA. IF GTU OFFICIALS HAVE ANY KIND OF ISSUES WITH ME THEN THEY CAN MAIL ME.

### Legal
This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by GTU or any of its affiliates or subsidiaries. This is an independent and unofficial module.

## License
&copy; Swapnil Soni | MIT
