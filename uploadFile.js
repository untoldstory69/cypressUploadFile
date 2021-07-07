describe ('upload file in cypress', () => {
    it ('upload file using cypress-file-upload plugin', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        const filePath = './excelData.xlsx';
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').contains('excelData.xlsx');
    })
})