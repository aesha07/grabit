@includeif('admin.partials.styles')
@includeif('admin.partials.scripts')


<html>

<body class="hold-transition login-page">
<div class="login-box">
    <div class="login-logo">
        <h1><b>Admin</b></h1>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">

        <form action="../../index2.html" method="post">
            <div class="form-group has-feedback">
                <input type="email" class="form-control" placeholder="Email">
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="Password">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-flat" style="width: 100px; margin: auto">Sign In</button>

            {{--            <div class="row">--}}
            {{--                <div class="col-xs-8">--}}
            {{--                    <div class="checkbox icheck">--}}
            {{--                        <label>--}}
            {{--                            <input type="checkbox"> Remember Me--}}
            {{--                        </label>--}}
            {{--                    </div>--}}
            {{--                </div>--}}
            {{--                <!-- /.col -->--}}
            {{--                <div class="col-xs-4">--}}
            {{--                </div>--}}
            {{--                <!-- /.col -->--}}
            {{--            </div>--}}
        </form>

    {{--        <div class="social-auth-links text-center">--}}
    {{--            <p>- OR -</p>--}}
    {{--            <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using--}}
    {{--                Facebook</a>--}}
    {{--            <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using--}}
    {{--                Google+</a>--}}
    {{--        </div>--}}
    <!-- /.social-auth-links -->

        {{--        <a href="#">I forgot my password</a><br>--}}
        {{--        <a href="register.html" class="text-center">Register a new membership</a>--}}

    </div>
    <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

{{--<!-- jQuery 3 -->--}}
{{--<script src="{{assets('admin/bower_components/jquery/dist/jquery.min.js')}}"></script>--}}
{{--<!-- Bootstrap 3.3.7 -->--}}
{{--<script src="{{assets('admin/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>--}}
{{--<!-- iCheck -->--}}
{{--<script src="{{assets('admin/plugins/iCheck/icheck.min.js')}}"></script>--}}


<script>
    $(function () {
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    });
</script>
</body>
</html>
