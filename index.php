
<?php
include('header.php');
include('gmenu.php');
?>
<div class="container offers"> </div>
<div id="content" class="site-content">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="container single-entry">
				<div class="row">
					<div class="col-lg-12 news-item-single-col">
					<section class="panel panel-default">
							<div class="panel-heading"><strong><span class="glyphicon glyphicon-th"></span> Inputs, Input Variants, Textarea</strong></div>
							<div class="panel-body">
								<form class="form-horizontal ng-pristine ng-valid">
					
									<div class="form-group">
										<label class="col-sm-2" for="">Normal input</label>
										<div class="col-sm-10">
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="label-focus">Label focus</label>
										<div class="col-sm-10">
											<input type="text" id="label-focus" class="form-control">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">With help</label>
										<div class="col-sm-10">
											<input type="text" class="form-control">
											<span class="help-block">Some help text goes here.</span>
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Password</label>
										<div class="col-sm-10">
											<input type="password" class="form-control">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Placeholder</label>
										<div class="col-sm-10">
											<input type="text" placeholder="placeholder goes here" class="form-control">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Disabled</label>
										<div class="col-sm-10">
											<input type="text" value="disabled" disabled="" class="form-control">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Predefined value</label>
										<div class="col-sm-10">
											<input type="text" value="http://" class="form-control">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Input with tooltip on focus</label>
										<div class="col-sm-10">
											<input type="text" tooltip-trigger="focus" data-placement="top" data-toggle="tooltip" class="form-control" tooltip="Tooltip on top">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Input with icons</label>
										<div class="col-sm-10">
											<input type="text" class="form-control">
											<span class="icon glyphicon glyphicon-star"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Input primary</label>
										<div class="col-sm-10">
											<input type="text" class="form-control input-primary">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Input info</label>
										<div class="col-sm-10">
											<input type="text" class="form-control input-info">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Input success</label>
										<div class="col-sm-10">
											<input type="text" class="form-control input-success">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Input warning</label>
										<div class="col-sm-10">
											<input type="text" class="form-control input-warning">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Input error</label>
										<div class="col-sm-10">
											<input type="text" class="form-control input-danger">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Control sizing</label>
										<div class="col-sm-10">
											<input type="text" class="form-control input-lg">
											<div class="divider"></div>
											<input type="text" class="form-control">
											<div class="divider"></div>
											<input type="text" class="form-control input-sm">
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Input Group</label>
										<div class="col-sm-10">
											<div class="input-group">
												<span class="input-group-addon">@</span>
												<input type="text" placeholder="Username" class="form-control">
											</div>
											<div class="divider"></div>
											<div class="input-group">
												<input type="text" class="form-control">
												<span class="input-group-addon">.00</span>
											</div>
											<div class="divider"></div>
											<div class="input-group">
												<span class="input-group-addon">$</span>
												<input type="text" class="form-control">
												<span class="input-group-addon">.00</span>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Button addons</label>
										<div class="col-sm-10">
											<div class="row">
												<div class="col-lg-6">
													<div class="input-group">
														<span class="input-group-btn">
															<button type="button" class="btn btn-default">Go!</button>
														</span>
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="col-lg-6">
													<div class="input-group">
														<input type="text" class="form-control">
														<span class="input-group-btn">
															<button type="button" class="btn btn-default">Go!</button>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-sm-2" for="">Textarea</label>
										<div class="col-sm-10">
											<textarea rows="4" class="form-control" id="" name=""></textarea>
										</div>
									</div>
								</form>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- #content -->
<?php
include('footer.php');
?>
