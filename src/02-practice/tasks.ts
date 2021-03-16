import { addItem, run } from './../03-utils';
import {
    first,
    last,
    elementAt,
    min,
    max,
    toArray,
    find,
    findIndex,
    single,
    filter,
    sample,
    tap,
    sampleTime,
    map,
    audit,
    auditTime,
    throttle,
    throttleTime,
    debounce,
    debounceTime,
    skip,
    skipLast,
    skipUntil,
    skipWhile,
    take,
    pluck,
    takeLast,
    takeUntil,
    startWith,
    takeWhile,
    distinct,
    reduce,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    switchMap,
    withLatestFrom,
    buffer,
    concatMap,
    mergeMap,
    delay,
} from 'rxjs/operators';
import {
    combineLatest, concat,
    forkJoin,
    from,
    fromEvent,
    fromEventPattern,
    generate,
    iif,
    interval, merge,
    of,
    pairs,
    range,
    timer, zip
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Task 1. skip()
// Создайте поток из массива чисел от 1 до 10, используя range()
// Получите элементы потока начиная с 3.
(function task1(): void {
    // const stream$ = range(1, 10).pipe(
    //     skip(2),
    // );

    // run(stream$);
})();

// Task 2. skipLast()
// Создайте поток из массива [1, 2, {}], используя from()
// Получите элементы потока без последнего элемента
(function task2(): void {
    // const stream$ = from([1, 2, {}]).pipe(
    //     skipLast(1),
    // );
    
    // run(stream$);
})();


// Task 3. skipUntil()
// Создайте поток чисел, который выдает их каждую 1с, используя interval().
// Выведите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Создайте поток собития клик по кнопке runBtn
// Игнорируйте элементы первого потока до клика на кнопке
(function task3(): void {
    // const button = document.getElementById('runBtn');
    // const click$ = fromEvent(button, 'click');
    // const stream$ = interval(1000).pipe(
    //     skipUntil(click$),
    //     tap((int: number) => addItem(int, {color: '#ccc'})),
    // );

    // run(stream$);
})();

// Task 4. skipWhile()
// Создайте поток чисел, который выдает их каждую 500мс, используя timer().
// Выведите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Игнорируйте элементы потока, пока они меньше 10, получите 5 элементов и завершите поток, используя take()
(function task4() {
    // const stream$ = timer(500, 500).pipe(
    //     skipWhile((int: number) => int < 10),
    //     tap((int: number) => addItem(int, {color: '#ccc'})),
    //     take(5),
    // );

    // run(stream$);
})();


// Task 5. take()
// Создайте поток собития клик по кнопке runBtn, используя fromEvent()
// Получите метку времени трех кликов, используя pluck() и завершите поток. 
(function task5() {
    // const button = document.getElementById('runBtn');
    // const click$ = fromEvent(button, 'click');
    // const stream$ = click$.pipe(
    //     pluck('timeStamp'),
    //     take(3),
    // );

    // run(stream$);
})();

// Task 6. takeLast()
// Создайте поток из слов 'Ignore', 'Ignore', 'Hello', 'World!', используя of().
// Модифицируйте поток так, чтобы получить последние два слова в потоке.
// Соберите из них предложение, используя reduce()
(function task6() {
    // const words = ['Ignore', 'Ignore', 'Hello', 'World!'];
    // const stream$ = of(...words).pipe(
    //     takeLast(2),
    //     reduce((acc: string, word: string) =>  acc ? `${acc} ${word}` : word, ''),
    // );

    // run(stream$);
})();

// Task7. takeUntil()
// Создайте поток, который будет выполнять запрос каждую 1с в течении 5с, используя timer()
// и ajax(`https://api.github.com/users?per_page=5`); Время остановки должно формироваться с помощью потока,
// созданого с помощью timer()
// Добавьте в поток ответ запроса, используя pluck(). 
// Испльзуйте вспомагательный оператор switchMap()  
(function task7() {
    // const timer$ = timer(6000);
    // const request$ = ajax(`https://api.github.com/users?per_page=5`);
    // const stream$ = timer(1000, 1000).pipe(
    //     switchMap(() => request$),
    //     pluck('response'),
    //     takeUntil(timer$),
    // );

    // run(stream$);
})();

// Task 8. takeWhile()
// Создайте поток случайных чисел в диапазоне от 0 до 1, используя Math.random, генератор, from()
// Добавьте в поток в качестве стартового значения 0.11, используя startWith() 
// Получайте из потока числа пока они находятся в диапазоне от 0 до 0.7.
// Добавьте в поток также значение, которое нарушило условие.
(function task8() {
    // const startValue = 0.11;
    // const maxValue = 0.7;

    // const intGenergator = function* () {
    //     while(true) {  yield Math.random(); };
    // };

    // const stream$ = from(intGenergator()).pipe(
    //     startWith(startValue),
    //     takeWhile((int: number) => int <= maxValue, true),
    // );
    
    // run(stream$);
})();

// Task 9. distinct()
// Создайте массив чисел с дублями, используя from().
// Модифицируйте поток так, чтобы в массиве были уникальные элементы
// Используйте reduce()
(function task9() {
    // const integers = [1, 2, 3, 4, 2, 1, 2, 4, 3, 4, 5, 5, 7, 7, 3, 1];
    // const stream$ = from(integers).pipe(
    //     distinct(),
    //     reduce((acc: number[], int: number) => [...acc, int], []),
    // );
    
    // run(stream$);
})();

// Task 10. distinctUntilChanged()
// Реализуйте функцию, которая создает Observable, который будет выдавать в поток значения, 
// хранящихся в свойстве sequence класса С, используя generate()
// Модифицируйте поток - уберите повторы в подряд идущих группах, соберите предложение,
// используя reduce()
(function task10() {
    // class C<T> {
    //     private words: T[] = [];

    //     get size(): number {
    //         return this.words.length;
    //     }

    //     add(elem: T) {
    //         this.words.push(elem);
    //         return this;
    //     }

    //     get(index: number): T {
    //         return this.words[index];
    //     }
    // }

    // const obj = new C<string>()
    //                 .add('На')
    //                 .add('дворе')
    //                 .add('дворе')
    //                 .add('трава,')
    //                 .add('на')
    //                 .add('траве')
    //                 .add('траве')
    //                 .add('дрова.');

    // const startValue = 0;
    // const condition = (i: number): boolean => i < obj.size;
    // const itterate = (i: number): number => ++i;
    // const selector = (i: number): string => obj.get(i);


    // const stream$ = generate(
    //     startValue,
    //     condition,
    //     itterate,
    //     selector,
    // ).pipe(
    //    distinctUntilChanged(),
    //    reduce((acc: string, word: string) => acc ? `${acc} ${word}`: word ,''),
    // );
    
    // run(stream$);
})();


// Task 11. distinctUntilKeyChanged()
// Пусть есть массив объектов. Создайте поток, в котором будут только три объекта, за исключением, второго объекта { name: 'Joe' }.
// Используйте from()
(function task11() {
    // const persons = [
    //         { name: 'Brian' },
    //         { name: 'Joe' },
    //         { name: 'Joe' },
    //         { name: 'Sue' }
    //     ];
    // const key = 'name';

    // const stream$ = from(persons).pipe(
    //     distinctUntilKeyChanged(key),
    // );
    
    // run(stream$);
})();


// Task 12. filter()
// Пусть есть поток objAddressStream, который выдает объект и второй поток skipFieldsStream, который содержит перечень ключей объекта
// Необходимо модифицировать поток так, чтобы он выдавал объект без ключей из второго потока. 
// Используйте switchMap, pairs, withLatestFrom, reduce
(function task12() {

    // const objAddressStream$ = of({
    //     country: 'Ukraine',
    //     city: 'Kyiv',
    //     index: '02130',
    //     street: 'Volodymyra Velikogo',
    //     build: 100,
    //     flat: 23
    // });

    // const skipFieldsStream$ = of(['build', 'flat']);

    // const stream$ = objAddressStream$.pipe(
    //     switchMap((adress) => pairs(adress)),
    //     withLatestFrom(skipFieldsStream$),
    //     filter(([[adressKey], excludeKeys]) => excludeKeys.indexOf(adressKey) === -1),
    //     reduce((acc, [pair]) => {
    //         const [key, value] = pair;
    //         return { ...acc, [key]: value };
    //     }, {}),
    // );
    
    // run(stream$, {outputMethod: 'console'});
})();



// Task 13. sample()
// Создайте поток, который выдает числа каждую секунду, используя interval(). Выведите эти числа серым цветом,
// использыя tap(), addItem(value, {color: '#ccc'})
// Создайте поток событий 'click' на кнопке, используя fromEventPattern()
// Организуйте получение последнего элемента из первого 
// потока во время клика по кнопке
(function task13() {
    // const button = document.getElementById('runBtn');
    // const addHandler = (handler) => button.addEventListener('click', handler);
    // const removeHandler = (handler) => button.removeEventListener('click', handler);

    // const click$ = fromEventPattern(addHandler, removeHandler);
    // const stream$ = interval(1000).pipe(
    //     tap((int: number) => addItem(int, {color: '#ccc'})),
    //     sample(click$),
    // );
    
    // run(stream$);
})();

// Task 14. sampleTime()
// Создайте поток, который выдает числа каждую секунду, используя interval(). Выводите эти числа серым цветом,
// использыя tap(), addItem(value, {color: '#ccc'})
// Модифицируйте данный поток так, чтобы он выдавал последнее число, которое было в потоке 
// с периодом 3000мс
(function task14() {
    // const stream$ = interval(1000).pipe(
    //     tap((int: number) => addItem(int, {color: '#ccc'})),
    //     sampleTime(3000),
    // );
    
    // run(stream$);
})();


// Task 15. audit()
// Создайте поток, который выдает числа каждые 500мс, используя interval(). 
// Выводите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Создайте функцию, которая принимает число и возращает поток, который выдает числа каждую 
// 1с, используя interval().
// Модифицируйте первый поток так, чтобы он выдавал значение только спустя время, заданое во 
// втором потоке.
(function task15() {
    // const integers$ = (count: number) => interval(1000).pipe((take(count)));
    // const stream$ = interval(500).pipe(
    //     tap((int: number) => addItem(int, {color: '#ccc'})),
    //     audit(() => integers$(10)),
    // );
    
    // run(stream$);
})();


// Task 16. auditTime()
// Создайте поток, который выдает числа каждую 1с, используя interval(). 
// Выводите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Модифицируйте первый поток так, чтобы он выдавал числи только спустя каждые 3с
(function task16() {
    // const stream$ = interval(1000).pipe(
    //     tap((int: number) => addItem(int, {color: '#ccc'})),
    //     auditTime(3000),
    // );
    
    // run(stream$);
})();


// Task 17. throttle()
// Создайте поток, который выдает числа каждую 1с, используя interval(). 
// Выводите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Модифицируйте первый поток так, чтобы он выдавал число, затем выдавал числа с периодом в число * 1000 мс.
(function task17() {
    // const exhibitorDelay$ = (increment: number) => interval(increment * 1000); 
    // const stream$ = interval(1000).pipe(
    //     tap((int: number) => addItem(int, {color: '#ccc'})),
    //     throttle((int: number) => exhibitorDelay$(int)),
    // );
    
    // run(stream$);
})();


// Task 18. throttleTime()
// Создайте поток объектов события mousemove?  Модифицируйте этот поток так, чтобы он выдал первое значение,
// а потом выдавал значение через каждый 2с
(function task18() {
    // const mouseMove$ = fromEvent(document, 'mousemove');
    // const stream$ = mouseMove$.pipe(
    //     throttleTime(2000),
    // );
    
    // run(stream$, { outputMethod: 'console'});
})();

// Task 19. debounce()
// Создайте поток объектов события mousemove. Модифицируйте этот поток так, чтобы он выдал значение после того,
// как в потоке не будет появляться объект в течении времени заданого с помощью второго потока, например 500мс.
(function task19() {
    // const mouseMove$ = fromEvent(document, 'mousemove');
    // const stream$ = mouseMove$.pipe(
    //     debounce(() => interval(500)),
    // );
    
    // run(stream$, { outputMethod: 'console'});
})();

// Task 20. debounceTime()
// Создайте поток значений поля ввода с id='text-field' для события keyup, используя fromEvent()  
// Модифицируйте этот поток так, чтобы он выдавал значение поля ввода после того,
// как в потоке не будет появляться новое значение в течении 500мс.
(function task20() {
    // const input = document.getElementById('text-field');
    // const keyUp$ = fromEvent(input, 'keyup');
    // const stream$ = keyUp$.pipe(
    //     debounceTime(500),
    //     map(({ target }: MouseEvent) => (target as HTMLInputElement).value),
    // );
    
    // run(stream$);
})();

//Homework

// Task 21. IIF
// Дано 2 потока. 1 поток - пользователи с доступом. 2 поток - пользователи без доступа
// Модифицируйте эти потоки так, чтобы запрашивать одни данные, если у пользователя есть доступи и другие, если у пользователя нет доступа
// Получите результат запроса
(function task21() {
    // const users = [
    //     {
    //         id: '123',
    //         hasAccess: true,
    //     },
    //     {
    //         id: '456',
    //         hasAccess: true,
    //     },
    //     {
    //         id: '789',
    //          hasAccess: false,
    //     },
    //     {
    //         id: '101',
    //         hasAccess: false,
    //     }
    // ];
    // const accessRequest$ = ajax('https://jsonplaceholder.typicode.com/todos/1');
    // const noAccessRequest$ = ajax('https://jsonplaceholder.typicode.com/posts/1');
    // const stream$ = from(users).pipe(
    //     concatMap(({ hasAccess }) =>  iif(() => hasAccess, accessRequest$, noAccessRequest$)),
    //     pluck('response'),
    // );

    // run(stream$);
})();


// Task 22. find
// Дано поток пользователей желающих зарегестрироваться на веббинар Виталия, однако к-во мест ограничено
// На веббинар может попасть только человек уровня senior
// Просмотрите все заявки и после того, как встретится первый разработчик уровня senior - закройте регистрацию на веббинар (поток)
// и выведите его Имя
(function task22() {
    // const searchTitle = 'Senior';
    // const candidates$ = from([
    //     {
    //         title: 'Junior',
    //         name: 'Andrii',
    //     },
    //     {
    //         title: 'Junior',
    //         name: 'Anna',
    //     },
    //     {
    //         title: 'Senior',
    //         name: 'Gorge',
    //     },
    //     {
    //         title: 'Middle',
    //         name: 'Greg',
    //     },
    // ]);
    //
    //
    // const stream$ = candidates$.pipe(
    //     find(({ title }) => title === searchTitle),
    //     pluck('name'),
    // );
    //
    // run(stream$);
})();

// Task 23. debounceTime()
// Реализуйте type ahead поиск. Пользователь печатает символ и если в течении 300 мс не было новых значений - выполнить запрос на сервер.
// Если значение в инпуте было изменено и востановлено в течении 300 мс - запрос отправлять не нужно
// Функционал type ahead активен, до нажатия по кнопке 'runBtn'.
(function task20() {
    // const button = document.getElementById('runBtn');
    // const input = document.getElementById('text-field');
    // const keyUp$ = fromEvent(input, 'keyup');
    // const click$ = fromEvent(button, 'click');
    // const request$ = ajax(`https://api.github.com/users?per_page=5`)
    // const stream$ = keyUp$.pipe(
    //     debounceTime(300),
    //     map(({ target }: KeyboardEvent) => (target as HTMLInputElement).value),
    //     distinctUntilChanged(),
    //     switchMap(() => request$),
    //     takeUntil(click$),
    // );
    //
    // run(stream$);
})();


export function runner() {}