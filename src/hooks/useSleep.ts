export function useSleep(){
    const sleepAsync = (msec : number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(null), msec);
        });
    }
    return sleepAsync;
}
