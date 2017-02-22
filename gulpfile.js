var gulp = require('gulp'),
    markdownpdf = require("markdown-pdf");

var output = gulp.env.output || '';

gulp.task('md2pdf', function() {
    if(!output){
        console.log('pls input output.');
        return;
    }
    var MD_doc = ['README.md', '安全规范.md', '书写规则.md', '编码规范.md', '注释.md'],
        PDF_doc = MD_doc.map(function(d){
            return output + d.replace('md', 'pdf')
        });


    markdownpdf().from(MD_doc.map(function(d){
        return './php/'+ d;
    })).to(PDF_doc, function(){
        console.log("done");
    });
});
