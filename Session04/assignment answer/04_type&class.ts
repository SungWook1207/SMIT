// 1️⃣ Animal 부모 클래스 정의
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log("소리를 낼 수 있습니다.");
    }
}

// 2️⃣ Animal을 상속하는 Dog, Cat, Bird 클래스 정의
class Dog extends Animal {
    speak(): void {
        console.log(`${this.name}: 멍멍!`);
    }
}

class Cat extends Animal {
    speak(): void {
        console.log(`${this.name}: 야옹!`);
    }
}

// 3️⃣ Flyable 인터페이스 정의
interface Flyable {
    fly(): void;
}

// 4️⃣ Bird 클래스는 Animal을 상속하고 Flyable을 구현
class Bird extends Animal implements Flyable {
    speak(): void {
        console.log(`${this.name}: 짹짹!`);
    }

    fly(): void {
        console.log(`${this.name}가 하늘을 날고 있습니다.`);
    }
}

// 5️⃣ 객체 생성 및 테스트
const dog = new Dog("바둑이");
console.log(dog.name); // "바둑이"
dog.speak(); // "바둑이: 멍멍!"


const cat = new Cat("나비");
console.log(cat.name); // "나비"
cat.speak(); // "나비: 야옹!"

const bird = new Bird("참새");
console.log(bird.name); // "참새"
bird.speak(); // "참새: 짹짹!"
bird.fly(); // "참새가 하늘을 날고 있습니다."
