describe('describe-text', function(){
    it('it-text', function () {
        afterEach((): void => {
            console.log('last');
        })
        console.log('first');
        console.log('second');
    })
})
