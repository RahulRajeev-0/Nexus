from rest_framework import serializers
from users.models import User
from workspaces.models import WorkspaceMembers, Workspaces


class WorkspaceSerializer(serializers.ModelSerializer):
    class Meta :
        model = Workspaces
        exclude = ['password', 'created_by']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active']

# serializer for getting a workspace details 
class WorkspaceDetailsSerializer(serializers.ModelSerializer):
    created_by = UserSerializer()
    class Meta :
        model = Workspaces
        exclude = ['password']



class WorkspaceMemberSerializer(serializers.ModelSerializer):
    class Meta :
        model = WorkspaceMembers



