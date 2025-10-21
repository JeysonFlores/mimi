import os


fonts = [
    "9fd726aeae98b22824f0dc8947036e77.woff",
    "98c4d2c0223fc8474641c77f923528e9.woff2",
    "1060345c54d396e76d73f1da7ee200bd.woff2",
    "7fc2786f9023d4d812357cb787e9ad4b.woff",
    "ac9b8a560f98d1757a4565a2419d33c3.woff",
    "d257a7100844bc3f98c9021168b6249e.woff2",
]

for font in fonts:
    os.system(f"curl -O https://graduacion-ti.my.canva.site/noemi-padilla/_assets/fonts/{font}")
