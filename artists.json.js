---
---
parseArtists([ {% for artist in site.artists %}
        {
            "name": "{{ artist.name }}",
            "genre": "{{ artist.genre }}",
            "date": "{{ artist.date }}",
            "hour": "{{ artist.hour }}",
            "stage": "{{ artist.stage }}",
            "description": "{{ artist.content | strip_newlines }}"
        }{% unless forloop.last %},{% endunless %}
    {% endfor %}
]);