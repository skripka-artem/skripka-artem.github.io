




const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    task: [],
    userInput: [],
    setCharCount: function () {
        let symbol = prompt("Введите количество символов")
        this.charCount = symbol
    },
    checkPositiveInteger: function () {
        let namder = +this.charCount
        let corect = (namder ^ 0) === namder;
if (corect===true) {
} else {
    this.setCharCount()
    this.checkPositiveInteger()
}
return corect
    },
    createTask:function () {
        while(this.charCount--){
            let rnd = Math.floor(Math.random()*this.chars.length);
            let rndSymbols = this.chars[rnd]
          this.task.push(rndSymbols);
        }
        return this.task

    },
    startTask: function () {
     let users =  prompt("Введите символи без пробелов и ком "+"\n "+ this.task)
       let arrUsers = users.split("")
        this.userInput = arrUsers

        let stringTask = this.task.join("")
        let srtingInput = this.userInput.join("")
        Array.prototype.diff = function(a) {
            return this.filter(function(i){return a.indexOf(i) < 0;});
        };

        if (stringTask === srtingInput) {
            console.log('Ты крут')
        } else {
            console.log('Не верно')
            let errors = this.task.diff(this.userInput)
            console.log("Твое количество ошибок" + ": " + errors.length + "\n" + "Не дрейф все получиться ")
        }
    }



}

function run() {
    keyTrainer.setCharCount()
    keyTrainer.checkPositiveInteger()
    keyTrainer.createTask()
    keyTrainer.startTask()
}

run()