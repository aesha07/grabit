@extends('shop.layout')
@section('content')
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                CATEGORIES

            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="#">Tables</a></li>
                <li class="active">Data tables</li>
            </ol>
        </section>

        <div class="box">
            <div class="box-header">
                <a href="{{ route('categories.create') }}"> <button type="button" class="btn btn-primary">Add New</button></a>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <table id="example1" class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>

                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($Category as $key=>$value)
                        <tr>
                            <td>{{ $key+1 }}</td>
                            <td>{{ $value->name }}</td>
                            <td>{{ $value->description }}</td>
                            <td>{{ $value->status }}</td>
                            <td>

                                <form  action="{{route('categories.destroy',$value->id)}}" method="POST">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                    <a class="btn-default" href="{{route('categories.edit',$value->id)}}">Edit<i class="fa fa-eye"></i></a>
                                    <button class="btn-danger" href="">Delete<i class="fa fa-remove"></i></button>
                                </form>
                            </td>


                        </tr>
                    @endforeach
                    </tbody>

                </table>
            </div>
            <!-- /.box-body -->
        </div>
        <!-- /.box -->
    </div>
    <!-- /.col -->

@endsection


