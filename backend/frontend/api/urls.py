from frontend.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='article')
urlpatterns = router.urls

# from django.urls import path

# from .views import (
#     ArticleListView, 
#     ArticleDetailedView,
#     ArticleCreateView,
#     ArticleDeleteView,
#     ArticleUpdateView
# )

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>', ArticleDetailedView.as_view()),    
#     path('<pk>/update', ArticleUpdateView.as_view()),
#     path('<pk>/delete', ArticleDeleteView.as_view()),
# ]