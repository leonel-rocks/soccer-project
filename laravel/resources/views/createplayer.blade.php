<div>
    <h1>Create Player</h1>
    @if(count($errors) > 0)
    <div class="alert alert-danger">
        <ul>
            @foreach($errors->all() as $error)
                <li>{{$error}}</li>
            @endforeach
        </ul>
    </div>
    @endif
    @if(\Session::has('success'))
    <div class="alert alert-success">
        <p>{{ \Session::get('success') }}</p>
    </div>
    @endif
    <form method="post" action="{{url('player')}}">
        {{csrf_field()}}
        <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="Enter the player name"/>
        </div>
        <div class="form-group">
            <input type="text" name="position" class="form-control" placeholder="Enter a player position"/>
        </>
        <div class="form-group">
            <input type="number" name="goals" class="form-control" placeholder="Goals Scored"/>
        </div>
        <button type="submit">Create Player</button>
    </form>
</div>