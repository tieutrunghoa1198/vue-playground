export class HomePageController {
    static onSubmit(name: any, gender: any) {
        console.log(name.value, ' Do something');
        localStorage.setItem('student', name.value);
        localStorage.setItem('gender', gender.value.toString());
    }

    static mounted(name: any, gender: any) {
        const nameLocal = localStorage.getItem('student') || '';
        const genderValue: boolean = (localStorage.getItem('gender') === 'true');
        console.log(genderValue, ' gender')
        name.value = nameLocal;
        gender.value = genderValue;
    }
}
