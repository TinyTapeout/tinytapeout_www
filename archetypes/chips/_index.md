{{- $data := dict -}}
{{- $url := (printf "https://index.tinytapeout.com/%s.json?fields=name" .Name) -}}
{{- with try (resources.GetRemote $url ) -}}
    {{- with .Err -}}
        {{- errorf "failed to fetch info from index: %s" . -}}
    {{- else with .Value -}}
        {{- $data = . | transform.Unmarshal -}}
    {{- else -}}
        {{- errorf "failed to get remote index" -}}
    {{- end -}}
{{- end -}}
---
title: "{{$data.name}}"
shuttle: "{{.Name}}"
description: "{{$data.projects | len }} designs"
weight: 50
---