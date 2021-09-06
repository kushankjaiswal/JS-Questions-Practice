const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
        return this;
    },
    getB() {
        console.log(this.b);
    }
};

obj.getA().getB();


Array.prototype.print = () => {
    // for (let i in this) {
    //     console.log(`${this[i]}`)
    // }
    console.log(`${this[0]},${this[1]}`)

}
const arr = [1, 2]
arr.print()

const obj1 = {
    a: {
        b: {
            c: 1
        }
    }
};

// const clone = Object.assign({}, obj1);

const clone = JSON.parse(JSON.stringify(obj1))

clone.a.b.c = 2;

clone

console.log(obj1.a.b.c)


const a = [1, 5, 4, 83, 45, 12];
const b = [1, 15, 42, 80, 45, 13, 100];

const c = (a.concat(b)).sort((a, b) => a - b);

console.log(c)

let i = 0;
for (i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}