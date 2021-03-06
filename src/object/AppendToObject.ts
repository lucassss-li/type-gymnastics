import { Expect } from '../utils/Expect'
import { Equal } from '../utils/Equal'
namespace AppendToObject {
    type AppendToObject<T, U extends string, V> = {
        [K in U | keyof T]: K extends keyof T ? T[K] : V
    }

    type AppendToObject1<T, U extends string, V> = T & { [K in U]: V }

    type test1 = {
        key: 'cat'
        value: 'green'
    }

    type testExpect1 = {
        key: 'cat'
        value: 'green'
        home: boolean
    }

    type test2 = {
        key: 'dog' | undefined
        value: 'white'
        sun: true
    }

    type testExpect2 = {
        key: 'dog' | undefined
        value: 'white'
        sun: true
        home: 1
    }

    type test3 = {
        key: 'cow'
        value: 'yellow'
        sun: false
    }

    type testExpect3 = {
        key: 'cow'
        value: 'yellow'
        sun: false
        isMotherRussia: false | undefined
    }

    type cases = [
        Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
        Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
        Expect<
            Equal<
                AppendToObject<test3, 'isMotherRussia', false | undefined>,
                testExpect3
            >
        >
    ]
}
