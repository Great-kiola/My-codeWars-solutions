function cookie() {
    // let aScript = typeof x

    // if (aScript === "string") {
    //     return "Who ate the last cookie? It was Zach!"
    // } else if (aScript === "number") {
    //     return "Who ate the last cookie? It was Monica!"
    // } else {
    //     return "Who ate the last cookie? It was the dog!"
    // }


    // Other Method
    var t = typeof x
    var who = t == "string" ? 'Zach' : 
              t == "number" ? 'Monica' : 'the dog'

    return `Who ate the last cookie? It was ${who}!`
}