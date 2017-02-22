var gulp = require('gulp'),
    concat = require('gulp-concat'),
    markdownpdf = require("markdown-pdf");

var output = gulp.env.output || '';




gulp.task('md2pdf', function() {
    if(!output){
        console.log('pls input output.');
        return;
    }
    var MD_doc = [
            'README.md',
            '安全规范.md',
            '书写规则.md',
            '编码规范.md'
            // '注释.md'
        ].map(function(d){
            return './php/'+ d;
        }),
        PDF_doc = output + "PHP开发编码规范.pdf";


    gulp.src(MD_doc)
        .pipe(concat('php-tmp-doc.md'))
        .pipe(gulp.dest('.tmp/'));

    markdownpdf().from('.tmp/php-tmp-doc.md').to(PDF_doc, function(){
        console.log("done");
    });
});
