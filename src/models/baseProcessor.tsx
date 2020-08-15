class BaseProcessor {
    static Empty(){return '';}
    static ToCharArray(word: string){
        return word.split('');//.join(',');
    }
    static TryParseInt(str: any) {
        let retValue: number | null = null;
        let out = false;
        if (str !== null) {
            if (str.length > 0) {
                if (!isNaN(str)) {
                    retValue = parseInt(str);
                    out = true;
                }
            }
        }
        return {
            retValue,
            out
        };
    }
    static IsNullOrWhiteSpace(input: any) {
        if (typeof input === 'undefined' || input === null) return true;
        return input.replace(/\s/g, '').length < 1;
    }
    static IsNullOrUndefined(input: any){
        if (typeof input === 'undefined' || input === null) return true;
    }
    static GetDateAndTime(concat: boolean)
    {
        if(concat){
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            return date+time;
        }else{
            let today = new Date();
            let date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
            let time = today.getHours()+''+today.getMinutes() +''+today.getSeconds();
            return date+time;
        }        
    }
    static GetTime(concat: boolean)
    {
        if(concat){
            let today = new Date();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            return time;
        }else{
            let today = new Date();
            let time = today.getHours()+''+today.getMinutes()+'' + today.getSeconds();
            return time;
        }        
    }
    static GetDate(concat : boolean)
    {
        if(concat){
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            return date;
        }else{
            let today = new Date();
            let date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
            return date;
        }        
    }
}
export default BaseProcessor;