# from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer

#DRF Views
class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipeListView(ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        return Recipe.objects.filter(category_id=self.kwargs['category_id'])


class RecipeDetailView(RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
