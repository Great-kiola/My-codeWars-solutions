function areYouPlayingBanjo(name) {
    let strLower = name.toLowerCase()

    if (strLower[0] == "r") {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }


    // Best method
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";

}