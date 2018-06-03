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

# REACT children
<p name="test">
    <a>url</a>
</p>

props.children = <a>url</a>

#REACT pas data to function / method
changeSome(val){
    this.setState({ bla: val})
}

approach:
1. <button onClick={() => this.changeSome("abcde")}></button>
2. <button onClick={this.changeSome.bind(this, "abcde")}></button>

best is number 2, because it not much re-render

# REACT inline css style
hint: replace dash with camelcase
cons: tidak semua fungsi dari css bisa dipakai

const style= {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
}

<button style={style}>

# supaya bisa pakai full akses ke css inline style, misal: media query, pseudo selector => :hover

## css package: radium

## css-modules # lecture 67
kalau pingin pakai global, di css add :global .nama-class {}
https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2

# component
## statless
    it's dumb / presentation component
    only props
    not have lifecycle

## stateful
    it's smart component 
    props + state
    have lifecycle

# lifecycle
## first creation / render
1. constructor(props) // default ES6 class
    perlu panggil __super(props)__
2. componentWillMount()
3. render()
3. 3a Render child components
4. componentDidMount()

## update (triggered by parent)
1. componentWillReceiveProps(nextProps)
    sync state to props. casenya: kalau ada props yang dateng, bisa buat update "state", 
    tapi bagusan udpate statenya di "componentWillUpdate()"
2. shouldComponentUpdate(nextProps, nextState)
    mau di update ga child component? = true / false
    bisa berhentiin re-render, kalau = false
3. componentWillUpdate(nextProps, nextState)
    sync state to props
4. render()
5. componentDidUpdate()

## update (triggered by internal change (state))
1. shouldComponentUpdate(nextProps, nextState)
2. componentWillUpdate(nextProps, nextState)
3. render()
3. 3a. update child component props
4. componentDidUpdate()

# { Component } is so old
instead used { PureComponent }, soalnya dia bakal ngecek ototmatis perlu ga sih re-render?
tanpa perlu capek-capek check nextProps / nextState di shouldComponentUpdate

# prop types
// jagain data type setiap props konsisten
yarn add save prop-types

# react 16 new lyfecycle
- getDerivedStateFromProps
    static getDerivedStateFromProps(nextProps, prevState) {return prevState}
    dijalankan setelah constructor, sebelum render
- 