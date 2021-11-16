// JS: 함수 f(x) => y
// 상태가 없음(정해진 결과만 나옴, z가 나올 수 없어) → 상태 유지할 수 있는 방법이 필요

// JS 함수는 1급 객체 → 변수 위치 = 함수 가능
// 배열에 함수도 넣을 수 있고, arr[i]() 함수 실행도 바로 가능

// 1 - 클로저
// 함수 안에 변수는 없지만, 함수 밖에 변수가 있어 사용 중(참조) = 클로저 → not defined 안뜸
// var i = 10 10번 출력, let i = 0~9 출력됨
// var는 호이스팅되어 브라우저에 전역으로 붙음, let은 for loop 안에서만 쓸 수 있는 지역

// 1 - 함수와 빈 배열
function outer(){
    let arr = [] // 외부에서 접근 못해 outer.arr 안됨 (보물창고)
    // 10 -
    let idx = 0

    // 2 - 배열.push를 직접 함수로 만들어주기, todo 데이터가 들어갈거야
    function add(todo){
        // 10.1 -
        todo.idx = idx++
        arr.push(todo)
        // console.log(arr)
    }

    // 6 - 빼는 함수
    function removeTodo(num){
        console.log("remove to do...")
        // 33 - 그 전에 특정 기준에 맞는 데이터를 뽑으려면 for loop써야했는데!!
        //
        const result = arr.filter(todo => todo.idx !== num)
        arr = result;
    }

    // 7 - todo가져오기
    function getTodo(idx){
        console.log("get Todo......")
    }

    // 8 - 배열가져오는 함수 For 화면에 모두 가져오기기
    function getAll(){
        return arr
    }

    // 29 - 체크하면 complete = false를 true로, 다시 한 번 선택하면 false
    function changeAll(){
        for (let i = 0; i < arr.length; i++) {
            arr[i].complete = !arr[i].complete
        }
    }

    // 3 - 객체 만들기
    // 3.1 - add라는 키의 값이 function add 반환
    // 6.1 - removeTodo
    // 7.1 - getTodo
    // const obj = {add:add, removeTodo:removeTodo, getTodo:getTodo}
    const obj = {add, removeTodo, getTodo, getAll, changeAll} // 외부에 노출하고 싶을 때

    return obj
}

// 4 - 로직 담당 하는 친구 = service
// const todoService = outer()
// console.log(todoService)
//
// // 5 - todoService 안에 있는 add() 접근 = 상태 유지 가능해짐
// // arr에는 접근 못 하고, 함수에는 접근할 수 있으니 데이터만 처리
// todoService.add("AAA")
// todoService.add("BBB")
// todoService.add("CCC")
// todoService.add("DDD")
