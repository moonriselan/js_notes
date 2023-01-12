# Variables

## Different keywords

- var (nie powinno sie używac, tylko jak potrzebujesz zasięg funkcyjny)
- let (zmienna)
- const (stala — domyslnie ta nalezy uzywac )

---

| x | var |   let    |  const   |
| ---: | :---: |:--------:|:--------:|
| redeclaration| ok (quirks mode) |    no    |    no    | 
|reinitialization| ok |    ok    |    no    |
|scope| function|  block   |  block   | 
| hoisting| ok| ok (TDZ) | ok (TDZ) |