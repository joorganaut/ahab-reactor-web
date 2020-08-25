export default class ObjectProcessor{
    static GetFunctions(obj: any): string[]{
        let result: string[] = [];
        for (var member in obj) { // For each member of the dictionary
            if (typeof obj[member] === "function") { // Is it a function?
              if (obj.hasOwnProperty(member)) { // Not inherited
                result.push(member)
              }
            }
          }
        return result;
    }
    static GetProperties(obj: any): string[]{
        let result: string[] = [];
        for (var member in obj) { // For each member of the dictionary
            if (typeof obj[member] !== "function") { // Is it a function?
              if (obj.hasOwnProperty(member)) { // Not inherited
                result.push(member)
              }
            }
          }
        return result;
    }
    static SplitOnCapital(word: string): string{
      if(word !== null && word !== undefined){
        let match = word.match(/[A-Z][a-z]+|[0-9]+/g);
        return match !== null ? match.join(" ") : '';
      }
      return word;
    }
}