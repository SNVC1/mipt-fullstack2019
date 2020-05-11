"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from games.views import GameViewSet, GameUpcomingViewSet, GameFinishedViewSet
from bets.views import BetViewSet, BetSelfViewSet, BetCreateSet, BetUpdateSet
from profiles.views import ProfileCreateSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

router = routers.DefaultRouter()
router.register('games', GameViewSet, 'games')
router.register('bets', BetViewSet, 'bets')
router.register('create_bet', BetCreateSet, 'create_bet')
router.register('my_bets', BetSelfViewSet, 'my_bets')
router.register('upcoming_games', GameUpcomingViewSet, 'upcoming_games')
router.register('finished_games', GameFinishedViewSet, 'finished_games')
router.register('update_bet', BetUpdateSet, 'update_bet')
router.register('profile_create', ProfileCreateSet, 'profile_create')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/refresh', TokenRefreshView.as_view(), name='token_refresh')
]
