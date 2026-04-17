export Str =
    capitalize: -->
        if it then ((+) it.0.to-upper-case!, it.slice(1).to-lower-case!) else ''
    title: -->
        if it then it.split /\s+/ .map (Str.capitalize) .join ' ' else ''
    camel-case: -->
        it
            |> (.match /[a-zA-Z0-9]+/g)
            |> (|| [])
            |> (.map ((w, i) -> if (===) 0 i then (.to-lower-case!) w else Str.capitalize w))
            |> (.join '')
    kebab-case: -->
        it
            |> (.replace /([a-z])([A-Z])/g '$1-$2')
            |> (.replace /[\s_]+/g '-')
            |> (.to-lower-case!)
    snake-case: -->
        it
            |> (.replace /([a-z])([A-Z])/g '$1_$2')
            |> (.replace /[\s\-]+/g '_')
            |> (.to-lower-case!)
    trim: -->
        it.trim!
    supertrim: -->
        (Str.trim it).replace /\s+/g ' '
    trunc: (s, l, o = '...') -->
        if (<=) s.length, l then s else (+) (s.slice 0 (Math.max 0 (-) l, o.length)), o
    split: (se, s) -->
        s.split se
    join: (se, xs) -->
        xs.join se
    rev: -->
        it
            |> Array.from
            |> (.reverse!)
            |> Str.join ''
    size: -->
        it.length
    contains: (search, s) -->
        s.includes search
    palindrome: -->
        (===) (Str.rev String it), (it.replace /[^a-zA-Z0-9]/g '' .to-lower-case!)
