from rest_framework.serializers import ModelSerializer, ValidationError, Serializer ,EmailField, CharField
from users.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ('password',)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class UserRegisterSerializer(ModelSerializer):
    
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password":{"write_only":True}}

    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance
        else:
            raise ValidationError({
                "password":'Password is not valid'
            })


class VerifyEmailSerializer(Serializer):
    email = EmailField()
    otp = CharField()
