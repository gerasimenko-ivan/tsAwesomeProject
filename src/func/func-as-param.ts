function step1(): void {
    console.log('step 1');
}
function step2(): void {
    console.log('step 2');
}
// step 3 - versions of function :: void > void
function step3_v1(): void {
    console.log('step 3: v1 (void > void)');
}
function step3_v2(): void {
    console.log('step 3: v2 (void > void) // just logs diff texts');
}
// step 4 - versions of function :: string, string > number
function step4_v1(a: string, b: string): number {
    const s = a + b;
    console.log(`step 4: v1 (string, string > number)`);
    console.log(`step 4: a+b='${s}'`);
    return s.length;
}
function step4_v2(a: string, b: string): number {
    const s = a + b + a;
    console.log(`step 4: v2 (string, string > number)`);
    console.log(`step 4: a+b+a='${s}' // for same input: logs diff texts & gives diff output`);
    return s.length;
}
function step5(n: number): void {
    console.log(`step 5 - number: ${n}`);
}

function testStepByStep(step3: { (): void}, step4: {(x, y): number}): void {
    step1();
    step2();
    step3();
    const number = step4('xxx', 'yyy');
    step5(number);
}

console.log('>>> testStepByStep - with v1-s');
testStepByStep(step3_v1, step4_v1);
console.log('\n');
console.log('>>> testStepByStep - with v2-s');
testStepByStep(step3_v2, step4_v2);
