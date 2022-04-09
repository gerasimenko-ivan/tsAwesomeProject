function a(): void {
    console.log('sdf');
    console.log('sdf');
    console.log('sdf');
}

function step1(): void {
    console.log('step 1');
}
function step2(): void {
    console.log('step 2');
}
function step3_v1(): void {
    console.log('step 3 - v1');
}
function step3_v2(): void {
    console.log('step 3 - v2');
}
function step4_v1(a: string, b: string): number {
    let s = a + b;
    console.log(`step 4 - v1 - a+b=${s}`);
    return s.length;
}
function step4_v2(a: string, b: string): number {
    let s = a + b + a;
    console.log(`step 4 - v1 - a+b+a=${s}`);
    return s.length;
}

function step5(n: number): void {
    console.log(`step 5 - number: ${n}`);
}

function test(step3: { (): void}, step4: {(x, y): number}): void {
    step1();
    step2();
    step3();
    let number = step4('xxx', 'yyy');
    step5(number);
}

console.log('>>> test - v2');
test(step3_v1, step4_v1);
console.log('\n>>> test - v2');
test(step3_v2, step4_v2);
