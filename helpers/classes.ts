
export function classes(...names:(string | undefined)[]){
    return names.filter(Boolean).join(' ')
}

export function scopedClassMaker(prefix:string){
    return function scopedClass(name?: string) {
        return [prefix, name].filter(Boolean).join('-')
    }
}