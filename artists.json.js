---
---
parseArtists([ {% for artist in site.artists %}
        {
            "id": "{{ forloop.index }}",
            "name": "{{ artist.name }}",
            "genre": "{{ artist.genre }}",
            "date": "{{ artist.date }}",
            "hour": "{{ artist.hour }}",
            "stage": "{{ artist.stage }}",
            "description": "{{ artist.content | strip_newlines | replace: '"': '\"' | replace: '</': '<\/' | replace: '/>': ' />' }}"
        }{% unless forloop.last %},{% endunless %}
    {% endfor %}
]);
