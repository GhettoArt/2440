---
---
parseArtists([ {% for artist in site.artists %}
        {
            "id": "{{ forloop.index }}",
            "name": "{{ artist.name }}",
            "image": "{{ artist.name | slugify | append: '.jpg' | prepend: '/images/artists/' | prepend: site.url }}",
            "thumbnail": "{{ artist.name | slugify | append: '.mini.jpg' | prepend: '/images/artists/' | prepend: site.url }}",
            "genre": "{{ artist.genre }}",
            "date": "{{ artist.date }}",
            "hour": "{{ artist.hour }}",
            "stage": "{{ artist.stage }}",
            "image": "/images/artists/{{ artist.name | slugify }}.jpg",
            "description": "{{ artist.content | strip_newlines | replace: '"': '\"' | replace: '</': '<\/' | replace: '/>': ' />' }}"
        }{% unless forloop.last %},{% endunless %}
    {% endfor %}
]);
