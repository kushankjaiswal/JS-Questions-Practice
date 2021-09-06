const arr = [5, 120, 15, 21];

for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(`Index: ${i}; Value:${arr[i]}`);
    }, arr[i])
}

const profile = {
    name: 'techsith',
    getName: function ()  {
        console.log(this.name)
    }
};

profile.getName();