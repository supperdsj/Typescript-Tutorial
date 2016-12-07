// Let's keep it simple and only add the following methods to the Map:
// setItem(key: string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs

class MyMap<T> {
    private maps: {[key: string]: T}={};

    setItem(key: string, item: T) {
        this.maps[key] = item;
    }

    getItem(key: string) {
        return this.maps[key];
    }

    clear() {
        this.maps = {};
    }

    printMap() {
        console.log(this.maps);
        for (let key in this.maps) {
            console.log(`${key}:${this.maps[key]}`);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 11);
numberMap.setItem('bananas', 22);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();

const stringMap = new MyMap<string>();
stringMap.setItem('apples', '11');
stringMap.setItem('bananas', '22');
console.log(stringMap.getItem('apples'));
stringMap.printMap();
stringMap.clear();