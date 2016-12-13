(function () {
	'use strict';

	angular
		.module('hireVideo')
		.controller('MainController', MainController)

	function MainController($scope, $timeout, $filter, $interval,
		webDevTec, toastr, $mdToast, $mdDialog, $window) {

		$scope.backuplist = '';
		$scope.currentindex = 0;
		$scope.showelement = true;
		$scope.videos = [];
		$scope.videosrclist = [];
		$scope.readonly = false;
		$scope.playingstate = 0;
		$scope.showcontrols = true;

		$scope.nextstyle = {
			"cursor": "pointer"
		};

		$scope.prevstyle = {
			"cursor": "no-drop"
		};

		$scope.showplay = true;
		$scope.showpause = false;
		$scope.showbigplay = true;

		$scope.am = true;
		$scope.au = false;
		$scope.pb = true;
		var drag = false;

		//$scope.currenttime = 0;

		$scope.videonotfound = false;


		$scope.videosrclist = [
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/Xscape.png',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/xscape.mp4',
				desc: 'Xscape (album)',
				duration: '04:07',
				Writer: 'Michael Jackson'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/always.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/Always.mp4',
				desc: 'Always',
				duration: '06:02',
				Writer: 'bon jovi'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/gotothere.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/gotothere.mp4',
				desc: 'Got to Be There',
				duration: '10:55',
				Writer: 'Michael Jackson'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/iwillbethere.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/ThereForYou.mp4',
				desc: 'I will be there',
				duration: '05:50',
				Writer: 'bon jovi'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/history.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/history2.mp4',
				desc: 'History',
				duration: '04:43',
				Writer: 'and future book'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/haveaniceday.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/HaveANiceDay.mp4',
				desc: 'Have a nice day',
				duration: '04:06',
				Writer: 'bon jovi'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/dangerous.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/dangerous.mp4',
				desc: 'Dangerous(Albums)',
				duration: '04:09',
				Writer: 'Michael Jackson'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/thisalovesong.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/ThisALoveSong.mp4',
				desc: 'This a love song',
				duration: '04:58',
				Writer: 'bon jovi'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/notalone.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/forever.mp4',
				desc: 'Forever',
				duration: '04:06',
				Writer: 'Michael Jackson'
		        		                                                                            		                                            },
			{
				image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/itsmylife.jpg',
				src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/ItsMyLife.mp4',
				desc: 'Its my life',
				duration: '04:27',
				Writer: 'bon jovi'
		        		                                                                      }];

		//		$scope.videosrclist = [
		//			{
		//				image: 'http://localhost:3000/assets/images/Xscape.png',
		//				src: 'http://localhost:3000/assets/video/xscape.mp4',
		//				desc: 'Xscape (album)',
		//				duration: '04:07',
		//				Writer: 'Michael Jackson'
		//		                                                                        		                                            },
		//			{
		//				image: 'http://localhost:3000/assets/images/always.jpg',
		//				src: 'http://localhost:3000/assets/video/Always.mp4',
		//				desc: 'Always',
		//				duration: '06:02',
		//				Writer: 'bon jovi'
		//		                                                                        		                                            },
		//			{
		//				image: 'http://localhost:3000/assets/images/gotothere.jpg',
		//				src: 'http://localhost:3000/assets/video/gotothere.mp4',
		//				desc: 'Got to Be There',
		//				duration: '10:55',
		//				Writer: 'Michael Jackson'
		//		                                                                        		                                            },
		//			{
		//				image: 'http://localhost:3000/assets/images/iwillbethere.jpg',
		//				src: 'http://localhost:3000/assets/video/ThereForYou.mp4',
		//				desc: 'I will be there',
		//				duration: '05:50',
		//				Writer: 'bon jovi'
		//		                                                                        		                                            },
		//			{
		//				image: 'http://localhost:3000/assets/images/history.jpg',
		//				src: 'http://localhost:3000/assets/video/history2.mp4',
		//				desc: 'History',
		//				duration: '04:43',
		//				Writer: 'and future book'
		//		                                                                        		                                            },
		//			{
		//				image: 'http://localhost:3000/assets/images/haveaniceday.jpg',
		//				src: 'http://localhost:3000/assets/video/HaveANiceDay.mp4',
		//				desc: 'Have a nice day',
		//				duration: '04:06',
		//				Writer: 'bon jovi'
		//		                                                                        		                                            },
		//			{
		//				image: 'http://localhost:3000/assets/images/dangerous.jpg',
		//				src: 'http://localhost:3000/assets/video/dangerous.mp4',
		//				desc: 'Dangerous(Albums)',
		//				duration: '04:09',
		//				Writer: 'Michael Jackson'
		//		                                                                        		                                            },
		//			{
		//				image: 'http://localhost:3000/assets/images/thisalovesong.jpg',
		//				src: 'http://localhost:3000/assets/video/ThisALoveSong.mp4',
		//				desc: 'This a love song',
		//				duration: '04:58',
		//				Writer: 'bon jovi'
		//		                                                                        		                                            },
		//			{
		//				image: 'http://localhost:3000/assets/images/notalone.jpg',
		//				src: 'http://localhost:3000/assets/video/forever.mp4',
		//				desc: 'Forever',
		//				duration: '04:06',
		//				Writer: 'Michael Jackson'
		//		                                                                        		                                            },
		//
		//			{
		//				image: 'http://localhost:3000/assets/images/itsmylife.jpg',
		//				src: 'http://localhost:3000/assets/video/ItsMyLife.mp4',
		//				desc: 'Its my life',
		//				duration: '04:27',
		//				Writer: 'bon jovi'
		//		                                                                        		                                            }
		//		                                                                        		                                        ];


		$scope.videosrc = {
			src: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/video/xscape.mp4',
			image: 'http://ec2-35-165-168-117.us-west-2.compute.amazonaws.com/assets/images/Xscape.png',
			duration: '04:07'
		};


		$scope.showdiv = function () {
			$scope.videos = $scope.videosrclist;
			$scope.showelement = !$scope.showelement;
		};

		//		$scope.videosrc = {
		//			src: 'http://localhost:3000/assets/video/xscape.mp4',
		//			image: 'http://localhost:3000/assets/images/Xscape.png',
		//			duration: '04:07'
		//		};

		var loadvideo = function () {
			$scope.duration = $scope.videosrc.duration;
			$scope.currenttime = '00:00';
			var progress = document.getElementById('progress');
			if (progress) {
				progress.style.width = '0px';
				var anchor = document.getElementById('anchor');
				if (anchor) {
					anchor.style.marginLeft = '0px';
				}
			}
		};

		var loadcontrols = function () {
			$scope.showcontrols = false;
			$timeout(function () {
				$scope.showcontrols = true;
				loadvideo();
				$scope.$apply();
				videoplayer.load();
				var bar = document.getElementById('xxx');
				//bar.addEventListener('click', seek, false);
				bar.addEventListener('mousedown', onseekdown, false);
				bar.addEventListener('mouseup', onseekup, false);
				bar.addEventListener('mousemove', onseekmove, false);
				bar.addEventListener('mouseleave', onseekup, false);
			}, 50);
		};

		$scope.videos = $filter('filter')($scope.videosrclist, '');

		$scope.selectedindex = $scope.currentindex;

		$scope.searchkeys = [];

		var dosearch = function (searchkeys) {
			$scope.showpause = false;
			$scope.showplay = true;
			$scope.showbigplay = true;
			$scope.currentindex = 0;
			$scope.selectedindex = 0;

			if (searchkeys.length <= 0) {
				$scope.videonotfound = false;
				$scope.videos = $filter('filter')($scope.videosrclist, '');
			} else {
				var videos = [];
				angular.forEach(searchkeys, function (key) {
					$scope.videos = $filter('filter')($scope.videosrclist, key);
					if (videos.length > 0) {
						var videoalter = $.map(videos, function (v, i) {
							return [v, $scope.videos[i]];
						});
						$scope.videos = videoalter;
					} else {
						videos = $scope.videos;
					}
				});
			}

			if ($scope.videos.length > 0) {
				$scope.videosrc = {
					src: $scope.videos[$scope.currentindex].src,
					image: $scope.videos[$scope.currentindex].image,
					duration: $scope.videos[$scope.currentindex].duration
				};
				loadcontrols();
				$timeout(function () {
					$scope.videonotfound = false;
					$scope.$apply();
				}, 50);

			} else {
				$scope.videosrc = {
					src: '',
					image: '',
					duration: '00:00'
				};
				loadcontrols();
				$timeout(function () {
					$scope.videonotfound = true;
					$scope.$apply();
				}, 50);

			}
		};

		$scope.search = function (searchkey) {
			if ($scope.searchkeys.indexOf(searchkey) == -1) {
				$scope.searchkeys.push(searchkey);
			}
			dosearch($scope.searchkeys);
		};

		$scope.clearsearch = function (searchkey) {
			dosearch($scope.searchkeys);
		};

		$scope.makefullscreen = function () {
			if (videoplayer.requestFullscreen) {
				videoplayer.requestFullscreen();
			} else if (videoplayer.webkitRequestFullscreen) {
				videoplayer.webkitRequestFullscreen();
			} else if (videoplayer.mozRequestFullScreen) {
				videoplayer.mozRequestFullScreen();
			} else if (videoplayer.msRequestFullscreen) {
				videoplayer.msRequestFullscreen();
			}
		};

		var updateduration = function () {
			var curmins = Math.floor(videoplayer.currentTime / 60);
			var cursecs = Math.floor(videoplayer.currentTime - curmins * 60);
			var durmins = Math.floor((videoplayer.duration - videoplayer.currentTime) / 60);
			var dursecs = Math.floor((videoplayer.duration - videoplayer.currentTime) - durmins * 60);

			if (cursecs < 10) {
				cursecs = "0" + cursecs;
			}
			if (dursecs < 10) {
				dursecs = "0" + dursecs;
			}
			if (curmins < 10) {
				curmins = "0" + curmins;
			}
			if (durmins < 10) {
				durmins = "0" + durmins;
			}

			$scope.currenttime = curmins + ":" + cursecs;
			$scope.duration = durmins + ":" + dursecs;
			$scope.$apply();
		};

		var moveseekbar = function () {
			var bar = document.getElementById('xxx');
			if (bar) {
				bar = angular.element(bar);
				var size = parseInt(videoplayer.currentTime * bar.width() / videoplayer.duration);
				var progress = document.getElementById('progress');
				if (progress) {
					progress.style.width = size + 'px';
					var anchor = document.getElementById('anchor');
					if (anchor)
						anchor.style.marginLeft = size + 'px';
				}
			}
		};

		var ontimeupdate = function () {
			if (!videoplayer.paused && !videoplayer.ended) {
				if (isNaN(videoplayer.currentTime) || isNaN(videoplayer.duration)) return;
				updateduration();
				moveseekbar();
				$scope.$apply();
			}
		};

		var seek = function (e) {
			if (isNaN(videoplayer.duration)) return;
			var bar = document.getElementById('xxx');
			if (bar) {
				bar = angular.element(bar);
				var mouseX = e.pageX - bar.offset().left;
				var newtime = mouseX * videoplayer.duration / bar.width();
				videoplayer.currentTime = newtime;
			}
		};

		var onseekdown = function (e) {
			if (e.button != 0) return;
			if (!videoplayer.paused && !videoplayer.ended) {
				drag = true;
			}
		}

		var onseekup = function (e) {
			if (e.button != 0) return;
			if (!videoplayer.paused && !videoplayer.ended) {
				if (drag) {
					drag = false;
					seek(e);
				}
			}
		}

		var onseekmove = function (e) {
			if (e.button != 0) return;
			if (!videoplayer.paused && !videoplayer.ended) {
				if (drag)
					$timeout(function () {
						seek(e);
					}, 50);
			}
		}

		$scope.initplayer = function () {
			$scope.showcontrols = true;
			$timeout(function () {
				$scope.$apply();
				loadvideo();
				videoplayer.load();
				var bar = document.getElementById('xxx');
				//bar.addEventListener('click', seek, false);
				bar.addEventListener('mousedown', onseekdown, false);
				bar.addEventListener('mouseup', onseekup, false);
				bar.addEventListener('mousemove', onseekmove, false);
				bar.addEventListener('mouseleave', onseekup, false);
				videoplayer.addEventListener('timeupdate', ontimeupdate, false);
				videoplayer.onended = function () {
					$scope.next();
				};
			}, 50);
		};

		$scope.adjustvolumn = function () {
			videoplayer.volume = volume.value;
		};

		$scope.next = function () {
			if ($scope.currentindex < ($scope.videos.length - 1)) {
				$scope.currentindex = $scope.currentindex + 1;
				$scope.selectedindex = $scope.currentindex;
				$scope.videosrc = {
					src: $scope.videos[$scope.currentindex].src,
					image: ($scope.playingstate == 1) ? '' : $scope.videos[$scope.currentindex].image,
					duration: $scope.videos[$scope.currentindex].duration
				};
				loadcontrols();
				$scope.prevstyle = {
					"cursor": "pointer"
				};
				if ($scope.currentindex >= ($scope.videos.length - 1)) {
					$scope.nextstyle = {
						"cursor": "no-drop"
					};
				}
				if ($scope.playingstate == 1) {
					$timeout(function () {
						$scope.play();
					}, 200);
				}
			}
		};

		$scope.prev = function () {
			if ($scope.currentindex >= 1) {
				$scope.currentindex = $scope.currentindex - 1;
				$scope.selectedindex = $scope.currentindex;
				$scope.videosrc = {
					src: $scope.videos[$scope.currentindex].src,
					image: ($scope.playingstate == 1) ? '' : $scope.videos[$scope.currentindex].image,
					duration: $scope.videos[$scope.currentindex].duration
				};
				loadcontrols();
				$scope.nextstyle = {
					"cursor": "pointer"
				};
				if ($scope.currentindex <= 0) {
					$scope.prevstyle = {
						"cursor": "no-drop"
					};
				}
				if ($scope.playingstate == 1) {
					$timeout(function () {
						$scope.play();
					}, 200);
				}
			}
		};

		$scope.play = function () {
			$scope.playingstate = 1;
			videoplayer.muted = ($scope.au) ? true : false;
			videoplayer.play();
			$scope.showplay = false;
			$scope.showbigplay = false;
			$scope.showpause = true;
		};

		$scope.mute = function () {
			videoplayer.muted = true;
			$scope.am = false;
			$scope.au = true;
			$scope.pb = false;
		};

		$scope.unmute = function () {
			videoplayer.muted = false;
			$scope.am = true;
			$scope.au = false;
			$scope.pb = true;
		};

		$scope.share = function (ev) {
			$mdDialog.show({
				controller: 'dialogcontroller',
				templateUrl: 'app/dialogbox/dialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			});
		};

		$scope.onlistselected = function (list, index) {
			$scope.currentindex = index;
			$scope.showpause = false;
			$scope.showplay = true;
			$scope.showbigplay = true;
			$scope.selectedindex = index;
			$scope.playingstate = 0;
			$scope.videosrc = {
				src: list.src,
				image: list.image,
				duration: list.duration
			};
			loadcontrols();
			$scope.backuplist = list.src;
		};

		$scope.pause = function () {
			$scope.playingstate = 2;
			$scope.showpause = false;
			$scope.showplay = true;
			$scope.showbigplay = true;
			videoplayer.pause();
		};

		$scope.like = function (tt) {
			var desc = '';
			angular.forEach($scope.videosrclist, function (item) {
				if (item.src == tt.src) {
					desc = item.desc;
				}
			});

			$mdToast.show(
				$mdToast.simple()
				.content('"' + desc + '" is liked')
				.position('top right')
				.theme('success-toast')
				.hideDelay(3000)
			);
		};

		$scope.dislike = function (tt) {
			var desc = '';
			angular.forEach($scope.videosrclist, function (item) {
				if (item.src == tt.src) {
					desc = item.desc;
				}
			});

			$mdToast.show(
				$mdToast.simple()
				.content('"' + desc + '" is disliked')
				.position('top right')
				.theme('error-toast')
				.hideDelay(3000)
			);
		};

	}
})();