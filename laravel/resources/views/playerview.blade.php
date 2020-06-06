<div>
    <ul>
        @foreach($data as $item)
        <li>{{$item->name}} | {{$item->position}} | {{$item->goals}}</li>
        @endforeach
    </ul>
</div>