# Template Tesi

This is my Computer Science Bachelor's thesis template based on the [UniPi Bachelor's thesis model](https://drive.google.com/file/d/1gs83yUizlF6QdYDiiCPEIBbUf-qAw-2l/view)

## Stucture

- `assets/`
  - all media used in _tex_ files divided by type
- `Chapters/`
  - all _tex_ files representing chapters
- `_minted-Tesi/`
   - auto created by minted
-  `out/`
   - output directory
- `Template/`
  - _tex_ files where the thesis structure was saved
- `bibliography.bib`
  - file used by BibTex and compiled by the user
- `Tesi.tex`
  - main file where all external files are declared for template and text

## Requires

Python with `pip`. You have to install `Pygment` with this command `pip install Pygment`.

`minted` requires the following packages available and reasonably up to date on your system.

- keyval
- kvoptions
- fancyvrb
- fvextra
- upquote
- float
- ifthen
- calc
- ifplatform
- pdftexcmds
- etoolbox
- xstring
- xcolor
- lineno
- framed
- shellesc (for luatex 0.87+)
- catchfile


[More info here](http://tug.ctan.org/macros/latex/contrib/minted/minted.pdf)

## Compiling 

`pdflatex --output-directory=./out -shell-escape Tesi.tex`

`-shell-escape` required by minted package.
