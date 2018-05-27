# arrow function
solve problem binding this, karena it's auto binding.

# export import package
1. default export
    ...
    export default login

    maka, di-import dengan sintaks:
    import login from './NamaFile.js'
    atau
    import terserah from './NamaFile.js'

    penamaan import bebas, soalnya fileJs diatas hanya export 1 thing

2. named export
    ...

    export const login = (status) => status ? "ok" : "nok";
    export const logout = (status) => status ? "ok" : "nok";

    maka, di-import dengan sintaks:
    import { login } from './NamaFile.js'

    penamaan import, WAJIB sama dengan nama variable. karena di file di atas ada beberap export

# inheritance dari class 
di < ES7
kalau sebuah "class extends dari class lain", maka wajib nambah "super" di konstructor
    ...
    constructor(){
        super();
        ...
    }

karena, "super" akan otomatis running parent class, yang nantinya method / fungsi dari class bisa dipake di child class.

## ES7:
    ga ada lagi constuctor dan 

# spread operator (triple dot) ...
fungsinya buat copy semua properties dari object / variabel
const oldArray = [5, 6, 7]
const newArray = [...oldArray, 1, 2]

artinya: newArray = array dengan value 5, 6, 7, 1, 2

# descructuring ( ekstrak object ke variabel lain)
contoh:
namaLengkap = ["Spongebob", "Squarepants"]

kita bisa ambil nama depan dan belakang dengan 1 baris kode:
[namaDepan, namaBelakang] = namaLengkap

jadi namaDepan = spongebob & namaBelakang = squarepants

# reference type variable
= array & object
pake spread operator kalau pingin copy object dari array / object

contoh:
const person = {
    name: "gery"
}

const newPerson = {
    ...person
}

jadi, newPerson sekarang punya semua object dari person. ini ga akan bisa kalau cuma:
const newPerson = person // ini cuma copy object person dari pointer