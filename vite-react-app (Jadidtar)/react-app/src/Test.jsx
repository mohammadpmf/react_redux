// import React from "react"
// میتونیم از React.Fragment استفاده کنیم که مجبور نباشیم یه div
// اضافه تعریف کنیم. ولی این روش پایین بهتره. هم ایمپورت رو لازم نداره و هم کوتاه تر
// نوشته میشه. فقط این ایمپورت رو نوشتم که بدونم وجود داره. و اگه دیدم بدونم چیه.
function Test() {
    return (
        <>
            <div>
                <p>This is test component</p>
                <span>Mohammad Fallah</span>
                <p>4 * 5 = {4 * 5}</p>
                <p>A random number from JS = {Math.round(Math.random() * 100)}</p>
            </div>
            <div><h3>This is the second div</h3></div>
        </>
    )
}

export default Test