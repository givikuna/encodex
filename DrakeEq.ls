say = console.log

R = 6.5 # Rate of formation of stars in the milky way galaxy per year
# https://www.astronomy.com/science/ask-astro-how-many-stars-are-born-each-year-in-the-milky-way/

fp = 1 # The fraction of those stars with planetary systems
# we haven't been able to prove a star to be without a planet
# the average star has about 1 planet, so virtually every star has a planet
# https://en.wikipedia.org/wiki/Exoplanet#:~:text=Planet%2Dhosting%20stars,-Main%20article:%20Planet&text=The%20Morgan%2DKeenan%20spectral%20classification,the%20quadruple%20system%20Kepler%2D64.

ne = 0.22 # The number of planets, per star system, with an environment suitable for life (essentially % of stars w/ a planet in the goldilocks zone)
# https://imagine.gsfc.nasa.gov/science/objects/milkyway1.html

fl = 1 # The fraction of suitable planets on which life actually appears


fi = 0.5 # The fraction of life-bearing planets on which intelligent life emerges
# # we know Mars doesn't have intelligent life, and probably never did, so 1/2 means 0.5

fc = 1 # The fraction of civilizations that develop a technology that releases detectable signs of their existence into space (EM signals)


L = 1000 # The length of time such civilizations release detectable signals into space


N = R * fp * ne * fl * fi * fc * L

say "#N possible number of extraterrestrial civilizations in the Milky Way galaxy"
