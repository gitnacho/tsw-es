interface IdLabel { id: number, /* algunos campos */ }
interface NameLabel { name: string, /* otros campos */
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
// Este comentario no se debe incluir

// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented"
}

let a = createLabel("typescript");
//  ^?

let b = createLabel(2.8);
//  ^?

let c = createLabel(Math.random() ? "hello" : 42);
//  ^?
